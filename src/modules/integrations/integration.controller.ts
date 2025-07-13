import { Controller, Get, Query } from '@nestjs/common';
import { PipedriveStagesServiceV2 } from './pipedrive/stages/v2/pipedrive.stages-v2.service';
import { PipedrivePipelinesServiceV2 } from './pipedrive/pipelines/v2/pipedrive.pipelines-v2.service';

@Controller('integrations')
export class IntegrationsController {
  constructor(
    private pipedriveStagesServiceV2: PipedriveStagesServiceV2,
    private pipedrivePipelinesServiceV2: PipedrivePipelinesServiceV2,
  ) {}

  @Get()
  async getAllStages(@Query() { pipeline_id, sort_by }) {
    return this.pipedriveStagesServiceV2.getAllStages({
      pipeline_id,
      sort_by,
    });
  }

  @Get('pipelines')
  async getAllPipelines() {
    return this.pipedrivePipelinesServiceV2.getAllPipelines();
  }
}
