import { resourcesNav } from "@/constants/navigation-data";
import NavMenu from "./NavMenu";

export const ResourcesMenu = () => {
  return (
    <NavMenu label="Resources">
      {(closeMenu) => (
        <div className="w-full flex justify-center">
          <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {resourcesNav.map(category => (
              <div key={category.title}>
                <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
                <div className="space-y-4">
                  {category.items.map(item => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.title}
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-start space-x-3 group"
                        onClick={closeMenu}
                      >
                        {Icon && <Icon className="h-5 w-5 min-w-5 text-neutral-400 group-hover:text-white mt-1" />}
                        <div className="min-w-0">
                          <div className="text-neutral-300 group-hover:text-white font-medium truncate">{item.title}</div>
                          {item.description && (
                            <div className="text-sm text-neutral-500 truncate">{item.description}</div>
                          )}
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </NavMenu>
  );
};