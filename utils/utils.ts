export const sumReducer = (sum: number, num: number): number => sum + num;
export const sumConvertReducer = (sum: number, num: string): number =>
	sum + Number(num);
