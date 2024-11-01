import { NextRequest, NextResponse } from 'next/server';

export default function middleware(req: NextRequest) {
  // const allowedCountries = ['DE', 'NG'];
  // const country = req.headers.get('X-Forwarded-For');
  // getRegionByIp();

  // // get region by ip
  // function getRegionByIp(){}

  // // filter action by result
  // if (!allowedCountries.includes(country ?? '')) {
  //   return NextResponse.redirect(new URL('/restricted', req.url));
  // }

  return NextResponse.next();
}
