import useSWR from "swr";
import {errorHandler} from "@/utils/common";
import {response} from "express";

const WORDPRESS_URL = 'https://www.wordpress.innovationsgp.com/wp-json/wp/v2/'

const fetcher = async () => {
    const response = await fetch(WORDPRESS_URL + 'posts')
    return await response.json()
}

export function Wordpress_Posts_All() {
    const {data, error, isLoading} = useSWR('wordpressPosts', fetcher)
    return {data, error, isLoading}
}

