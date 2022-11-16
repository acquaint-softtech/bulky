import bulky from "@bulky/core";
import Dashboard from "@bulky/dashboard";
import AwsS3 from "@bulky/aws-s3";

const bulky = new bulky({
  debug: true,
});

bulky.use(Dashboard, {
  inline: true,
  target: "body",
});
bulky.use(AwsS3, {
  getUploadParameters(file) {
    // Send a request to our PHP signing endpoint.
    return fetch("/s3-sign.php", {
      method: "post",
      // Send and receive JSON.
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        filename: file.name,
        contentType: file.type,
      }),
    })
      .then((response) => {
        // Parse the JSON response.
        return response.json();
      })
      .then((data) => {
        // Return an object in the correct shape.
        return {
          method: data.method,
          url: data.url,
          fields: data.fields,
          headers: data.headers,
        };
      });
  },
});
