export interface IntegrationPipelines<T = unknown> {
  getAllPipelines(): Promise<T>;
}

export interface IntegrationStages<T = unknown> {
  getAllStages(): Promise<T>;
}

export interface IntegrationDeals<T = unknown> {
  getAllDeals(): Promise<T>;
}

export interface IntegrationDealFields<T = unknown> {
  getAllDealFields(): Promise<T>;
}

export interface IntegrationPerson<T = unknown> {
  getPersonById(): Promise<T>;
}

export interface IntegrationOrganizations<T = unknown> {
  getOrganizationById(): Promise<T>;
}

export interface IntegrationNotes<T = unknown> {
  getNotesByDealId(): Promise<T>;
}

export interface IntegrationActivities<T = unknown> {
  getActivitiesByDealId(): Promise<T>;
}
