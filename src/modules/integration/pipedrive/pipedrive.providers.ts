import { PipedrivePipelinesServiceV2 } from './pipelines/v2/pipedrive.pipelines-v2.service';
import { PipedriveStagesServiceV2 } from './stages/v2/pipedrive.stages-v2.service';

export const PipedriveProviders = [
  PipedrivePipelinesServiceV2,
  PipedriveStagesServiceV2,
];
