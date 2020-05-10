# LNFC

Lnfc is a helpful nodejs file creator development depandency for node-express-mongoose stack.
With LNFC you could generate:

- Models
- Services
- Controllers
- Routes
- Middlewares

Or just 5 files within one folder based on your feature.

**With pre-generated CRUD operations enabled**

### Installation

LNFC requires [Node.js](https://nodejs.org/) to run.

Install LNFC as a global npm package.

```sh
$ npm install lnfc -g
```

### Options

Make use of the options below along with a name to generate the corresponding file name of the service you want

| Option       | Description                                                      |
| ------------ | ---------------------------------------------------------------- |
| **m**        | Creates a model                                                  |
| **c**        | Creates a controller                                             |
| **r** **-m** | Creates a router (-m enables a middleware option on your routes) |
| **s**        | Creates a service                                                |
| **w**        | Creates a middleware                                             |
| **a**        | Creates a complete flow of all the options above                 |

The new update includes the option to create your file structure based on feature rather than that of roles.
Just include **-f** option along with **all**, just like below;

```sh
$ lnfc a -f
```

This will create a folder based on your feature and all the files needed for that feature within one folder.
**_Productivity, here I come!!!_**

## License

MIT

**Free Software, Hell Yeah!**
