import { Data } from '@/app/page';
import { createClient, MicroCMSListResponse } from 'microcms-js-sdk';

if(!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('サービスドメインにアクセスできない：microCMS')
}

if(!process.env.MICROCMS_API_KEY) {
  throw new Error('APIキーにアクセスできない：microCMS')
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN, 
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getVenueData = async (maxCount: number, areaId?: string) => {
  const limit = 100;
  let offset = 0;
  let allContents: Data[] = [];
  
  while (allContents.length < maxCount) {
    const currentLimit = Math.min(limit, maxCount - allContents.length)
    
    const data: MicroCMSListResponse<Data> = await client.getList({
      endpoint: "venue",
      queries: areaId ? { filters: `area[equals]${areaId}`, limit: 100, offset: offset, orders: "order,system:default" } : { limit: 100, offset: offset, orders: "order,system:default" },
    });

    allContents = [...allContents, ...data.contents]

    if (offset + currentLimit >= data.totalCount) {
      break
    }
    offset += currentLimit
  }
  return allContents
}