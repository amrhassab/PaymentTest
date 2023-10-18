import type { Dictionary, TTestDataItem, TTestData } from "./types";
import moment from 'moment';


export function sortObject<TValue>(
    obj: Dictionary<TValue>,
    valSelector: (val: TValue) => number | string,
) {
    const sortedEntries = Object.entries(obj)
        .sort((a, b) =>
            valSelector(b[1] as TValue) > valSelector(a[1] as TValue) ? 1 :
                valSelector(b[1] as TValue) < valSelector(a[1] as TValue) ? -1 : 0);
    return new Map(sortedEntries);
}

export default function sortAndGroup(data: TTestData) {
    // Note:
    // Native script is faster than Lodash.js and Underscore so lets just reduce and sort it ourself
    // Also those libs can be heavy / cumbersome
    const grouped = data
        .reduce(function (accumulator: Record<string, TTestData>, current: TTestDataItem) {
            const name = moment(current['timestamp']).calendar({
                sameDay: '[Today]',
                nextDay: 'MMM Do',
                nextWeek: 'MMM Do',
                lastDay: '[Yesterday]',
                lastWeek: 'MMM Do',
                sameElse: 'MMM Do'
            });
            // const name = current['timestamp']
            var group = accumulator[name] ?? (accumulator[name] = []);
            group.push(current);
            return accumulator;
        }, {} as Record<string, TTestData>);

    const sortTransactionCallBack = (a: TTestDataItem, b: TTestDataItem) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();

    // sort each group's transactions
    for (let key in grouped) {
        grouped[key] = grouped[key].sort(sortTransactionCallBack);
    }

    // sort group order in map
    return sortObject(grouped, val => (val as TTestData)[0].timestamp);
}
