/** @type {import('./$types').PageLoad} */
import { supabase } from '$lib/supabaseClient';

export async function load({ params }) {

    // const blob = new Blob ([params.slug], { type: "text/plain" });
	// const formData = new FormData();
	// formData.append("data", blob);

// TODO: fix GET
	// let { data: markdownData, error } = await fetch("http://home.webkonsept.com/84ed8bd7-f8a1-4e4b-bc4d-85868208dae5/" + params.slug + "/", {
	let markdownData = { date: "", text: ""};
	await fetch("http://home.webkonsept.com/84ed8bd7-f8a1-4e4b-bc4d-85868208dae5/" + params.slug, {
		method: "GET",
		// body: formData,
	})
	// .then((response) => response.body)
	.then((response) => {
		console.log(response);
		
		// console.log("response.headers", response.headers);
		// console.log("response.headers.get(\"last-modified\"): ", response.headers.get("last-modified"));
		let date = response.headers.get("last-modified");
		if(date != null) {
			markdownData.date = date;
		}

		
		return response.body;
	})
	.then((resBod) => {
		// console.log(response);
		let reader = resBod?.getReader();

		return new ReadableStream({
			start(controller) {
			  // The following function handles each data chunk
			  function push() {
				// "done" is a Boolean and value a "Uint8Array"
				reader?.read().then(({ done, value }) => {
				  // If there is no more data to read
				  if (done) {
					// console.log("done: ", done);
					controller.close();
					return;
				  }
				  // Get the data and send it to the browser via the controller
				  controller.enqueue(value);
				  // Check chunks by logging to the console
				//   console.log("done, value: ", done, value);
				  push();
				});
			  }
	  
			  push();
			},
		  });
		})

	.then((stream) =>
		// Respond with our stream
		new Response(stream, { headers: { "Content-Type": "text/html" } }).text(),
	)
	.then((result) => {
		// Do things with result
		console.log("result: ",result);
		markdownData.text = result;
	});

	// console.log(markdownData);
	
    return {
    	// data: markdownData ?? [],
		markdownData
    };
}
