import AWS, { AWSError } from "aws-sdk";

AWS.config.update({
  region: "us-east-1"
});

const s3 = new AWS.S3({ apiVersion: "2006-03-01" });

export const uploadImage = (image: File, imageName: string, fn: any) => {
  const params = {
    Bucket: "leoblogimages",
    Key: imageName,
    Body: image,
    ContentType: "image/jpeg",
  };

  // call S3 to retrieve upload file to specified bucket
  s3.upload(params, (err: any, data: any) => {
    if (err) {
      console.log(err);
      return false;
    }
    if (data) {
      console.log(data);
      fn();
      return true;
    }
  });
};
