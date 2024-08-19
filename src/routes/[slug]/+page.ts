/** @type {import('./$types').PageLoad} */
import { supabase } from '$lib/supabaseClient';

export async function load({ params }) {

    const blob = new Blob ([params.slug], { type: "text/plain" });
	const formData = new FormData();
	formData.append("data", blob);
// TODO: fix GET
	fetch("http://home.webkonsept.com/84ed8bd7-f8a1-4e4b-bc4d-85868208dae5/", {
		method: "GET",
		body: formData,
	})
	.then((response) => response.json())
	.then((json) => {
		console.log(json);
	});

    let { data: markdowntable, error } = await supabase
        .from('markdowntable')
        .select('uuid,created_at,text')
        .eq("uuid", params.slug)


    return {
    data: markdowntable ?? [],
    };
}
