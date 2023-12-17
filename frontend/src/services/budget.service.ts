import type { Budget } from '@/@types';
import { handleRequest, httpClient } from '@/utils';

const path = 'budget';

export async function create(newBudget: Budget): Promise<Budget> {
    return await handleRequest(httpClient.post(`${path}`, newBudget));
  }