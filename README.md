# Sys pack app

This application was developed using a few features functionalities from RedwoodJS

### How to run the project steps

- [ ] Clone this repo
- [ ] execute `yarn` command on the root folder. If you don't have `yarn` command available, you might need to install its pacakge via NPM with the command `npm install --global yarn`. Npm is a package manager available when you install `Node` in your machine. Be sure that you have node install by running `node -v`. If you don't have it installed, download the LTS version from https://nodejs.org/en.
- [ ] Once the step above is finished, it's time to run the migrations. Migrations contains the history of the database management. run it using the command `yarn rw prisma migrate dev`.
- [ ] Now, you should set up the env variables for this project. Since it was developed using AWS S3 bucket to keep the uploaded files, and the bucket required a few configurations to make it easy to receive the uploaded files from an outside application, its highly recommended to use the ones provided on the topic `Env variables` below, avoiding additional setup steps. There is one env variable called `SESSION_SECRET`. This one must be present on your `.env` file or the application will not working since it is using dbAuth feature from `redwoodjs`.
- [ ] Finally, run the project using the command `yarn rw dev`.

### Env variables

These are the env variables used in this project. Once the challenge review finishes, they will be removed. Use these if you want.

```
REDWOOD_ENV_S3_PRE_SIGNED_URL=https://3lwgajzth2.execute-api.sa-east-1.amazonaws.com/default/getPreSignedURL-1
REDWOOD_ENV_BUCKET_NAME=sys-pack-api-bucket
REDWOOD_ENV_BUCKET_REGION=sa-east-1
REDWOOD_ENV_BUCKET_S3_ACCESS_KEY=AKIAUICRJBRRWUBQ63WS
REDWOOD_ENV_BUCKET_S3_SECRET_ACCESS_KEY=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
SESSION_SECRET=w2n6UucPiV4XYDrnzLm4hDhXkgbHJ2cCe9vnmZrCdkLaqqk8DSx3SAJrkrCF39Fk
```

### Additional Information

- The AWS approach selected to upload the files here was the `pre-signed` URL. <br />.
- A third party library for upload called `react-dropdzone-upload` was used to deal with the drag and drop option, but it is also possible to create a native one using a few properties availables on native HTML tags like `onDrop` and `onDragOver`.  <br />
- The additional features from Redwoodjs like testing and storybook were not used, since the challenge didn't require it.  <br />
- The AWS credentials to access the console on AWS will not be provided. If there is need to check if the files were really uploaded, feel free to contact the developer to check with him.  <br />

### Final notes

Thanks for the challenge. It was helpful in terms of hard skills development. Feel free to contact me at email or LinkedIn  <br />
Email: luiz.ado@hotmail.com <br />
LinkedIn: https://www.linkedin.com/in/luiz-fernando-morais-54a459103/  <br />
