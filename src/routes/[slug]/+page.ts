/** @type {import('./$types').PageLoad} */
import { supabase } from '$lib/supabaseClient';

export async function load({ params }) {

    let { data: markdowntable, error } = await supabase
        .from('markdowntable')
        .select('uuid,created_at,text')
        .eq("uuid", params.slug)


    return {
    data: markdowntable ?? [],
    };
}
