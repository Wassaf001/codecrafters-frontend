import ConceptModel from 'codecrafters-frontend/models/concept';
import UserModel from 'codecrafters-frontend/models/user';
import Model, { attr, belongsTo } from '@ember-data/model';

export default class ConceptEngagementModel extends Model {
  @belongsTo('concept', { async: false, inverse: 'engagements' }) declare concept: ConceptModel;
  @belongsTo('user', { async: false, inverse: 'conceptEngagements' }) declare user: UserModel;
  @attr('date') declare completedAt?: Date;
  @attr('number') declare currentProgressPercentage: number;
  @attr('date') declare lastActivityAt: Date;
  @attr('date') declare startedAt: Date;

  get completedBlocksCount() {
    return Math.round((this.currentProgressPercentage / 100) * this.totalBlocksCount);
  }

  get totalBlocksCount() {
    const allBlocks = this.concept.parsedBlocks;

    return allBlocks.length;
  }
}
