/** @type {import('./$types').PageLoad} */
import { pile, url } from '$lib/APIdata.js';

export async function load({ params }) {
	let markdownData = { date: "", text: ""};
	
	await fetch(url + pile + params.slug, {
		method: "GET",
	})
	.then((response) => {
		console.log(response);
		let date = response.headers.get("last-modified");
		if(date != null) {
			markdownData.date = date;
		}

		return response.body;
	})
	.then((resBod) => {
		let reader = resBod?.getReader();

		return new ReadableStream({
			start(controller) {
			  // The following function handles each data chunk
			  function push() {
				// "done" is a Boolean and value a "Uint8Array"
				reader?.read().then(({ done, value }) => {
				  // If there is no more data to read
				  if (done) {
					console.log("done: ", done);
					controller.close();
					return;
				  }
				  // Get the data and send it to the browser via the controller
				  controller.enqueue(value);
				  // Check chunks by logging to the console
				  console.log("done, value: ", done, value);
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
