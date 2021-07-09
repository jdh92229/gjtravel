import X2JS from 'x2js'
const api_url = 'http://data.geoje.go.kr/rfcapi/rest/geojetour/getGeojetourList?serviceKey=YUz6t0HJD6QB9wnbhJTr1d311xAq06bgPqj3Q15FpLpVSn9xghIOL0%2Fjwk9digjJMrqbLUrusE2EfFVPGY1UbQ%3D%3D&pageSize=10&startPage=1'
export const fetchHotEntry = () => {
    return fetchRss(api_url)
}
const fetchRss = async (url) => {
    const response = await fetch(url)
    const rssText = await response.text()
    const x2js = new X2JS()
    const rss = x2js.xml2js(rssText)
    return rss.rfcOpenApi.body.data
}