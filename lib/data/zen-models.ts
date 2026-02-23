/**
 * Zen model data for hanzo.ai — imported from @zenlm/models.
 *
 * This file re-exports the canonical model definitions.
 * Do NOT define model specs here. Edit @zenlm/models instead.
 *
 * @see ~/work/hanzo/docs/packages/zen-models/src/models.ts
 */

export {
  allModels,
  apiModels,
  localModels,
  zen4Models,
  zen3Models,
  foundationModels,
  getModel,
  modelById,
} from '@zenlm/models'

export { families } from '@zenlm/models'

export {
  MARKUP,
  ZEN_MULTIPLIER,
  tools,
  compute,
  gpu,
  thirdPartyModels,
} from '@zenlm/models'

export type {
  ZenModel,
  ModelFamily,
  ModelPricing,
  ModelSpec,
} from '@zenlm/models'
