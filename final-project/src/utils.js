import dayjs from "dayjs"
import relativeTime from 'dayjs/plugin/relativeTime'
import Cookies from "js-cookie";

dayjs.extend(relativeTime);

export const getAccessToken = () => Cookies.get('accessToken');
export const setAccessToken = (token) => Cookies.set('accessToken', token);
export const removeAccessToken = () => Cookies.remove('accessToken');
export const getAuthUser = () => {
    const user = Cookies.get('user');
    if(user) return JSON.parse(user);
    return null;
};
export const setAuthUser = (user) => Cookies.set('user', JSON.stringify(user));
export const removeAuthUser = () => Cookies.remove('user');

export const getRelativeDate = (date) => dayjs(date).fromNow();
export const getFormattedCurrency = (currency) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(currency)