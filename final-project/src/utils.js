import dayjs from "dayjs"
import relativeTime from 'dayjs/plugin/relativeTime'
import Cookies from "js-cookie";

dayjs.extend(relativeTime);

export const getAccessToken = () => Cookies.get('accessToken');
export const setAccessToken = (token) => Cookies.set('accessToken', token);

export const getRelativeDate = (date) => dayjs(date).fromNow();
export const getFormattedCurrency = (currency) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(currency)