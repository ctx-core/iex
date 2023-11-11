export interface IEXRefDataExchangeSymbol {
	symbol:string
	exchange:string
	exchangeSuffix:string
	exchangeName:string
	exchangeSegment:string
	exchangeSegmentName:string
	name:string
	date:string
	type:string
	iexId:string|null
	region:string
	currency:string
	isEnabled:boolean
	figi:string|null
	cik:string|null
	lei:string|null
}
