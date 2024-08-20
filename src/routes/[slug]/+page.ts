/** @type {import('./$types').PageLoad} */
import { supabase } from '$lib/supabaseClient';

export async function load({ params }) {

    const blob = new Blob ([params.slug], { type: "text/plain" });
	const formData = new FormData();
	formData.append("data", blob);

// TODO: fix GET
	// let { data: markdownData, error } = await fetch("http://home.webkonsept.com/84ed8bd7-f8a1-4e4b-bc4d-85868208dae5/" + params.slug + "/", {
	let markdownData = await fetch("http://home.webkonsept.com/84ed8bd7-f8a1-4e4b-bc4d-85868208dae5/" + params.slug, {
		method: "GET",
		// body: formData,
	})
	.then((response) => {
		console.log("response", response);
		return response;
	})
	// .then((json) => {
	// 	console.log(JSON.stringify(json));
	// });

	// vv  Old  vv
    // let { data: markdowntable, error } = await supabase
    //     .from('markdowntable')
    //     .select('uuid,created_at,text')
    //     .eq("uuid", params.slug)

	// console.error(error);
	console.log(markdownData);
	
    return {
    	// data: markdownData ?? [],
		markdownData
    };
}
