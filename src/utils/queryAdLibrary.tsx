import axios from 'axios'

const cleanRes = (res: any) => {
  if (res.status == 200) {
    const data = res.data.data

    const cleanedData = data.map((datum: any) => {
      return {
        id: datum.id,
        pageId: datum.page_id,
        minSpend: datum.spend.lower_bound,
        maxSpend: datum.spend.upper_bound,
        currency: datum.currency,
        minImpressions: datum.impressions.lower_bound,
        maxImpressions: datum.impressions.upper_bound,
        pageName: datum.page_name,
        adSnapshot: datum.ad_snapshot_url,
        dateCreated: datum.ad_creation_time,
        fundingEntity: datum.funding_entity
      }
    })

    return cleanedData
  } else {
    return []
  }
}

const queryAdLibrary = async (searchTerm: string) => {
  const url = 'https://graph.facebook.com/v10.0/ads_archive'
  const access_token = process.env.FB_ACCESS_TOKEN

  const params = {
    'access_token': access_token,
    'ad_reached_countries': ['PH'],
    'ad_type': 'POLITICAL_AND_ISSUE_ADS',
    'search_terms': searchTerm,
    'fields': 'page_id,page_name,ad_creation_time,funding_entity,impressions,spend,currency,ad_snapshot_url'
  }

  const res = await axios.get(url, { params })

  const cleanedRes = cleanRes(res)

  return cleanedRes
}

export default queryAdLibrary