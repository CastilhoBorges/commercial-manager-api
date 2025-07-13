import { PipedriveDealFieldsServiceV1 } from './deal-fields/v1/pipedrive.deal-fields-v1.service';
import { PipedriveDealsServiceV2 } from './deals/v2/pipedrive.deals-v2.service';
import { PipedrivePipelinesServiceV2 } from './pipelines/v2/pipedrive.pipelines-v2.service';
import { PipedriveStagesServiceV2 } from './stages/v2/pipedrive.stages-v2.service';

export const PipedriveProviders = [
  PipedrivePipelinesServiceV2,
  PipedriveStagesServiceV2,
  PipedriveDealsServiceV2,
  PipedriveDealFieldsServiceV1,
];
