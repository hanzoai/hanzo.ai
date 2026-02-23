'use client'

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Grid3X3,
  List,
  ChevronDown,
  X,
  Filter,
  ExternalLink,
  BookOpen,
  Github,
  GraduationCap,
  Rocket,
  Package,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@hanzo/ui";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@hanzo/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@hanzo/ui/sheet";
import { Badge } from "@hanzo/ui";
import { cn } from '@/lib/utils';
import {
  ossCatalog,
  featuredCollections,
  repoTypes,
  categories,
  languages,
  useCases,
  maturityLevels,
  deploymentTypes,
  sortOptions,
  filterRepos,
  sortByHot,
  sortByRecent,
  type OSSRepo,
  type RepoType,
  type Maturity,
  type DeploymentType,
  type FeaturedCollection
} from "@/lib/data/oss-catalog";

// =============================================================================
// QUICK FILTER CHIPS
// =============================================================================

const quickFilters = [
  { value: 'all', label: 'All' },
  { value: 'core', label: 'Core' },
  { value: 'template', label: 'Templates' },
  { value: 'example', label: 'Examples' },
  { value: 'connector', label: 'Connectors' },
  { value: 'mcp', label: 'MCP' },
  { value: 'sdk', label: 'SDKs' },
];

// =============================================================================
// REPO CARD COMPONENT
// =============================================================================

interface RepoCardProps {
  repo: OSSRepo;
  view: 'grid' | 'list';
}

const RepoCard: React.FC<RepoCardProps> = ({ repo, view }) => {
  const Icon = repo.icon;

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case 'featured': return 'bg-primary/10 text-foreground border-white/30';
      case 'recommended': return 'bg-primary/10 text-foreground border-white/30';
      case 'experimental': return 'bg-primary/5 text-foreground/70 border-border';
      case 'stable': return 'bg-primary/5 text-foreground/70 border-border';
      case 'active': return 'bg-primary/10 text-foreground border-white/30';
      default: return 'bg-neutral-800 text-muted-foreground border-border';
    }
  };

  const getMaturityBadge = (maturity: Maturity) => {
    const config = maturityLevels.find(m => m.value === maturity);
    return config ? getBadgeVariant(maturity) : getBadgeVariant('default');
  };

  const primaryAction = repo.signals.deployable && repo.actions.deployUrl
    ? { label: 'Deploy', url: repo.actions.deployUrl, icon: Rocket }
    : repo.type === 'template'
    ? { label: 'Use Template', url: repo.actions.githubUrl, icon: Package }
    : null;

  if (view === 'list') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 p-4 rounded-lg border border-border bg-secondary/50 hover:border-border transition-colors"
      >
        {/* Icon */}
        <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center flex-shrink-0">
          {Icon && <Icon className="w-5 h-5 text-muted-foreground" />}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-foreground truncate">{repo.name}</h3>
            {repo.signals.featured && (
              <Badge variant="outline" className={cn('text-xs', getBadgeVariant('featured'))}>
                Featured
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground truncate">{repo.description}</p>
        </div>

        {/* Badges */}
        <div className="hidden md:flex items-center gap-2">
          {repo.languages.slice(0, 2).map(lang => (
            <Badge key={lang} variant="outline" className="text-xs bg-neutral-800 text-muted-foreground border-border">
              {lang}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {primaryAction && (
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-foreground" asChild>
              <a href={primaryAction.url || "#"} target="_blank" rel="noopener noreferrer">
                {primaryAction.label}
              </a>
            </Button>
          )}
          <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-foreground" asChild>
            <a href={repo.actions.githubUrl || "#"} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="group flex flex-col rounded-xl border border-border bg-secondary/50 hover:border-border transition-all overflow-hidden"
    >
      {/* Header */}
      <div className="p-5 pb-3">
        <div className="flex items-start justify-between mb-3">
          <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center">
            {Icon && <Icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />}
          </div>
          <div className="flex gap-1.5">
            {repo.signals.featured && (
              <Badge variant="outline" className={cn('text-xs', getBadgeVariant('featured'))}>
                Featured
              </Badge>
            )}
            {repo.signals.recommended && !repo.signals.featured && (
              <Badge variant="outline" className={cn('text-xs', getBadgeVariant('recommended'))}>
                Recommended
              </Badge>
            )}
            <Badge variant="outline" className={cn('text-xs', getMaturityBadge(repo.maturity))}>
              {repo.maturity.charAt(0).toUpperCase() + repo.maturity.slice(1)}
            </Badge>
          </div>
        </div>

        <h3 className="font-semibold text-foreground mb-1 group-hover:text-foreground transition-colors">
          {repo.name}
        </h3>
        <p className="text-xs text-muted-foreground font-mono mb-2">{repo.slug}</p>
        <p className="text-sm text-muted-foreground line-clamp-2">{repo.description}</p>
      </div>

      {/* Metadata */}
      <div className="px-5 pb-3 flex flex-wrap gap-1.5">
        {repo.languages.slice(0, 3).map(lang => (
          <Badge key={lang} variant="outline" className="text-xs bg-neutral-800/50 text-muted-foreground border-border">
            {lang}
          </Badge>
        ))}
        {repo.categories.slice(0, 1).map(cat => (
          <Badge key={cat} variant="outline" className="text-xs bg-neutral-800/50 text-muted-foreground border-border">
            {cat}
          </Badge>
        ))}
        {repo.signals.deployable && (
          <Badge variant="outline" className="text-xs bg-primary/5 text-foreground/70 border-border">
            Deployable
          </Badge>
        )}
      </div>

      {/* Upstream Attribution */}
      {repo.upstream && (
        <div className="px-5 pb-3">
          <a
            href={repo.upstream.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors"
          >
            Powered by {repo.upstream.name} →
          </a>
        </div>
      )}

      {/* Actions */}
      <div className="mt-auto p-4 pt-3 border-t border-border flex items-center gap-2">
        {primaryAction ? (
          <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90 text-foreground" asChild>
            <a href={primaryAction.url || "#"} target="_blank" rel="noopener noreferrer">
              <primaryAction.icon className="w-3.5 h-3.5 mr-1.5" />
              {primaryAction.label}
            </a>
          </Button>
        ) : (
          <Button size="sm" variant="outline" className="flex-1 border-border hover:bg-accent" asChild>
            <a href={repo.actions.githubUrl || "#"} target="_blank" rel="noopener noreferrer">
              <Github className="w-3.5 h-3.5 mr-1.5" />
              View Source
            </a>
          </Button>
        )}

        <div className="flex gap-1">
          {repo.actions.docsUrl && (
            <Button size="sm" variant="ghost" className="px-2 text-muted-foreground hover:text-foreground" asChild title="Docs">
              <a href={repo.actions.docsUrl || "#"} target="_blank" rel="noopener noreferrer">
                <BookOpen className="w-4 h-4" />
              </a>
            </Button>
          )}
          {repo.actions.learnUrl && (
            <Button size="sm" variant="ghost" className="px-2 text-muted-foreground hover:text-foreground" asChild title="Learn">
              <a href={repo.actions.learnUrl || "#"}>
                <GraduationCap className="w-4 h-4" />
              </a>
            </Button>
          )}
          {primaryAction && (
            <Button size="sm" variant="ghost" className="px-2 text-muted-foreground hover:text-foreground" asChild title="GitHub">
              <a href={repo.actions.githubUrl || "#"} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// =============================================================================
// FEATURED COLLECTION CARD
// =============================================================================

interface CollectionCardProps {
  collection: FeaturedCollection;
  onSelect: (repoIds: string[]) => void;
}

const CollectionCard: React.FC<CollectionCardProps> = ({ collection, onSelect }) => {
  const Icon = collection.icon;

  return (
    <button
      onClick={() => onSelect(collection.repos)}
      className="flex items-center gap-3 p-4 rounded-xl border border-border bg-secondary/30 hover:border-white/30 hover:bg-secondary/50 transition-all text-left group"
    >
      <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
        <Icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
      </div>
      <div>
        <h4 className="font-medium text-foreground text-sm group-hover:text-foreground transition-colors">
          {collection.title}
        </h4>
        <p className="text-xs text-muted-foreground">{collection.description}</p>
      </div>
    </button>
  );
};

// =============================================================================
// FACET SECTION
// =============================================================================

interface FacetSectionProps {
  title: string;
  options: { value: string; label: string }[];
  selected: string[];
  onChange: (values: string[]) => void;
  collapsed?: boolean;
}

const FacetSection: React.FC<FacetSectionProps> = ({
  title,
  options,
  selected,
  onChange,
  collapsed = false,
}) => {
  const [isOpen, setIsOpen] = useState(!collapsed);

  const toggleOption = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter(v => v !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  return (
    <div className="border-b border-border pb-4 mb-4 last:border-0 last:pb-0 last:mb-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left mb-2"
      >
        <span className="text-sm font-medium text-foreground/80">{title}</span>
        <ChevronDown
          className={cn(
            'w-4 h-4 text-muted-foreground transition-transform',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="space-y-1 overflow-hidden"
          >
            {options.map(option => (
              <button
                key={option.value}
                onClick={() => toggleOption(option.value)}
                className={cn(
                  'flex items-center gap-2 w-full px-2 py-1.5 rounded text-sm transition-colors',
                  selected.includes(option.value)
                    ? 'bg-primary/10 text-foreground'
                    : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                )}
              >
                <div
                  className={cn(
                    'w-4 h-4 rounded border flex items-center justify-center',
                    selected.includes(option.value)
                      ? 'border-white bg-primary'
                      : 'border-neutral-600'
                  )}
                >
                  {selected.includes(option.value) && (
                    <Check className="w-3 h-3 text-foreground" />
                  )}
                </div>
                {option.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// =============================================================================
// MAIN CATALOG COMPONENT
// =============================================================================

const OSSCatalog: React.FC = () => {
  // State
  const [searchQuery, setSearchQuery] = useState('');
  const [quickFilter, setQuickFilter] = useState('all');
  const [sortBy, setSortBy] = useState('hot');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedUseCases, setSelectedUseCases] = useState<string[]>([]);
  const [selectedMaturity, setSelectedMaturity] = useState<string[]>([]);
  const [selectedDeployment, setSelectedDeployment] = useState<string[]>([]);
  const [selectedCollection, setSelectedCollection] = useState<string[] | null>(null);

  // Filter and sort repos
  const filteredRepos = useMemo(() => {
    let repos = ossCatalog;

    // Collection filter
    if (selectedCollection) {
      repos = repos.filter(r => selectedCollection.includes(r.id));
    }

    // Quick filter
    if (quickFilter !== 'all') {
      repos = repos.filter(r => r.type === quickFilter);
    }

    // Facet filters
    repos = filterRepos(repos, {
      types: selectedTypes.length ? selectedTypes as RepoType[] : undefined,
      categories: selectedCategories.length ? selectedCategories : undefined,
      languages: selectedLanguages.length ? selectedLanguages : undefined,
      useCases: selectedUseCases.length ? selectedUseCases : undefined,
      maturity: selectedMaturity.length ? selectedMaturity as Maturity[] : undefined,
      deployment: selectedDeployment.length ? selectedDeployment as DeploymentType[] : undefined,
      search: searchQuery || undefined,
    });

    // Sort
    switch (sortBy) {
      case 'hot':
        return sortByHot(repos);
      case 'recent':
        return sortByRecent(repos);
      case 'beginner':
        return [...repos].sort((a, b) => {
          const aScore = (a.type === 'template' ? 2 : 0) + (a.maturity === 'stable' ? 1 : 0);
          const bScore = (b.type === 'template' ? 2 : 0) + (b.maturity === 'stable' ? 1 : 0);
          return bScore - aScore;
        });
      case 'name':
        return [...repos].sort((a, b) => a.name.localeCompare(b.name));
      default:
        return sortByHot(repos);
    }
  }, [
    searchQuery,
    quickFilter,
    sortBy,
    selectedTypes,
    selectedCategories,
    selectedLanguages,
    selectedUseCases,
    selectedMaturity,
    selectedDeployment,
    selectedCollection,
  ]);

  const featuredRepos = useMemo(() => {
    if (selectedCollection || searchQuery || quickFilter !== 'all') return [];
    return filteredRepos.filter(r => r.signals.featured).slice(0, 6);
  }, [filteredRepos, selectedCollection, searchQuery, quickFilter]);

  const mainRepos = useMemo(() => {
    if (featuredRepos.length === 0) return filteredRepos;
    const featuredIds = new Set(featuredRepos.map(r => r.id));
    return filteredRepos.filter(r => !featuredIds.has(r.id));
  }, [filteredRepos, featuredRepos]);

  const hasActiveFilters =
    selectedTypes.length > 0 ||
    selectedCategories.length > 0 ||
    selectedLanguages.length > 0 ||
    selectedUseCases.length > 0 ||
    selectedMaturity.length > 0 ||
    selectedDeployment.length > 0;

  const clearAllFilters = () => {
    setSelectedTypes([]);
    setSelectedCategories([]);
    setSelectedLanguages([]);
    setSelectedUseCases([]);
    setSelectedMaturity([]);
    setSelectedDeployment([]);
    setSelectedCollection(null);
    setQuickFilter('all');
    setSearchQuery('');
  };

  // Facet rail content
  const FacetRail = () => (
    <div className="space-y-4">
      <FacetSection
        title="Type"
        options={repoTypes.map(t => ({ value: t.value, label: t.label }))}
        selected={selectedTypes}
        onChange={setSelectedTypes}
      />
      <FacetSection
        title="Category"
        options={categories.map(c => ({ value: c, label: c }))}
        selected={selectedCategories}
        onChange={setSelectedCategories}
      />
      <FacetSection
        title="Language"
        options={languages.map(l => ({ value: l, label: l }))}
        selected={selectedLanguages}
        onChange={setSelectedLanguages}
      />
      <FacetSection
        title="Use Case"
        options={useCases.map(u => ({ value: u, label: u }))}
        selected={selectedUseCases}
        onChange={setSelectedUseCases}
        collapsed
      />
      <FacetSection
        title="Maturity"
        options={maturityLevels.map(m => ({ value: m.value, label: m.label }))}
        selected={selectedMaturity}
        onChange={setSelectedMaturity}
        collapsed
      />
      <FacetSection
        title="Deployment"
        options={deploymentTypes.map(d => ({ value: d.value, label: d.label }))}
        selected={selectedDeployment}
        onChange={setSelectedDeployment}
        collapsed
      />
    </div>
  );

  return (
    <section className="py-16 px-4 md:px-8 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            OSS Catalog
          </h1>
          <p className="text-muted-foreground text-lg">
            Open source tools, templates, and infrastructure for building AI applications
          </p>
        </div>

        {/* Featured Collections */}
        {!selectedCollection && !searchQuery && quickFilter === 'all' && (
          <div className="mb-10">
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Quick Start Collections
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {featuredCollections.map(collection => (
                <CollectionCard
                  key={collection.id}
                  collection={collection}
                  onSelect={setSelectedCollection}
                />
              ))}
            </div>
          </div>
        )}

        {/* Top Bar */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search repos, templates, tools..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="pl-10 bg-secondary border-border focus:border-white/50"
            />
          </div>

          {/* Quick Filters */}
          <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0">
            {quickFilters.map(filter => (
              <Button
                key={filter.value}
                variant={quickFilter === filter.value ? 'default' : 'outline'}
                size="sm"
                onClick={() => {
                  setQuickFilter(filter.value);
                  setSelectedCollection(null);
                }}
                className={cn(
                  'whitespace-nowrap',
                  quickFilter === filter.value
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'border-border hover:bg-accent'
                )}
              >
                {filter.label}
              </Button>
            ))}
          </div>

          {/* Sort & View */}
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="border-border hover:bg-accent">
                  {sortOptions.find(s => s.value === sortBy)?.label || 'Sort'}
                  <ChevronDown className="ml-2 w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-secondary border-border">
                {sortOptions.map(option => (
                  <DropdownMenuItem
                    key={option.value}
                    onClick={() => setSortBy(option.value)}
                    className={cn(
                      'cursor-pointer',
                      sortBy === option.value && 'text-foreground'
                    )}
                  >
                    {option.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="flex border border-border rounded-md">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setView('grid')}
                className={cn('px-2', view === 'grid' && 'bg-neutral-800')}
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setView('list')}
                className={cn('px-2', view === 'list' && 'bg-neutral-800')}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>

            {/* Mobile Filter Button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="lg:hidden border-border">
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                  {hasActiveFilters && (
                    <span className="ml-2 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                      {selectedTypes.length + selectedCategories.length + selectedLanguages.length}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="h-[80vh] bg-secondary border-border">
                <SheetHeader>
                  <SheetTitle className="text-foreground">Filters</SheetTitle>
                </SheetHeader>
                <div className="mt-6 overflow-y-auto h-full pb-20">
                  <FacetRail />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Active Filters */}
        {(hasActiveFilters || selectedCollection) && (
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-sm text-muted-foreground">Active filters:</span>
            {selectedCollection && (
              <Badge variant="outline" className="bg-primary/10 text-foreground border-white/30">
                Collection
                <button onClick={() => setSelectedCollection(null)} className="ml-1">
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            )}
            {[...selectedTypes, ...selectedCategories, ...selectedLanguages].slice(0, 5).map(filter => (
              <Badge key={filter} variant="outline" className="bg-neutral-800 text-foreground/80 border-border">
                {filter}
                <button
                  onClick={() => {
                    setSelectedTypes(selectedTypes.filter(t => t !== filter));
                    setSelectedCategories(selectedCategories.filter(c => c !== filter));
                    setSelectedLanguages(selectedLanguages.filter(l => l !== filter));
                  }}
                  className="ml-1"
                >
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              className="text-muted-foreground hover:text-foreground"
            >
              Clear all
            </Button>
          </div>
        )}

        {/* Main Content */}
        <div className="flex gap-8">
          {/* Facet Rail - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 p-4 rounded-xl border border-border bg-secondary/30">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-foreground">Filters</h3>
                {hasActiveFilters && (
                  <button
                    onClick={clearAllFilters}
                    className="text-xs text-muted-foreground hover:text-foreground"
                  >
                    Clear all
                  </button>
                )}
              </div>
              <FacetRail />
            </div>
          </aside>

          {/* Results */}
          <div className="flex-1 min-w-0">
            {/* Results Count */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-muted-foreground">
                {filteredRepos.length} {filteredRepos.length === 1 ? 'result' : 'results'}
              </p>
            </div>

            {/* Featured Row */}
            {featuredRepos.length > 0 && (
              <div className="mb-8">
                <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Hanzo Picks
                </h2>
                <div
                  className={cn(
                    view === 'grid'
                      ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'
                      : 'space-y-3'
                  )}
                >
                  {featuredRepos.map(repo => (
                    <RepoCard key={repo.id} repo={repo} view={view} />
                  ))}
                </div>
              </div>
            )}

            {/* Main Results */}
            {mainRepos.length > 0 ? (
              <div
                className={cn(
                  view === 'grid'
                    ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'
                    : 'space-y-3'
                )}
              >
                {mainRepos.map(repo => (
                  <RepoCard key={repo.id} repo={repo} view={view} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground mb-4">No results found</p>
                <Button variant="outline" onClick={clearAllFilters}>
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OSSCatalog;
