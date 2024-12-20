import { createClient } from 'microcms-js-sdk';

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