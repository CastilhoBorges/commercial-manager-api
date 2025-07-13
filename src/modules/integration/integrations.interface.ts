export interface IntegrationPipelines<T = unknown> {
  getAllPipelines(params: T): Promise<T>;
}

export interface IntegrationStages<T = unknown> {
  getAllStages(params: T): Promise<T>;
}

export interface IntegrationDeals<T = unknown> {
  getDealsByPipelineId(pipelineId: string): Promise<T>;
}

export interface IntegrationDealFields<T = unknown> {
  getDealFields(): Promise<T>;
}

export interface IntegrationPerson<T = unknown> {
  getPersonById(personId: string): Promise<T>;
}

export interface IntegrationOrganizations<T = unknown> {
  getOrganizationById(organizationId: string): Promise<T>;
}

export interface IntegrationNotes<T = unknown> {
  getNotesByDealId(dealId: string): Promise<T>;
}

export interface IntegrationActivities<T = unknown> {
  getActivitiesByDealId(dealId: string): Promise<T>;
}
