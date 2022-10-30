# Firebase Authentication in Angular and ASP.NET

This is just a short demo on how to implement Firebase authentication in an application running an Angular frontend and ASP.NET backend. I hope this will be a good starting point for those wishing to integrate this into their projects.
## The main required packages 
Check the .csproj file and package.json if in doubt

### Angular:

```bash
ng add @angular/fire
npm install @angular-cool/social-login-buttons / yarn add @angular-cool/social-login-buttons
```
[AngularFire](https://github.com/angular/angularfire) is an officially supported library, which integrates the Firebase SDK smoothly into the framework.

The latter is a package that contains out-of-the box social login buttons (e.g Google).

### ASP.NET:
```bash
dotnet add package FirebaseAdmin --version 2.3.0
dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer --version 6.0.10
```
FirebaseAdmin is an SDK that integrates Firebase into .NET services. This is useful for creating token handlers when handling authentication.

Microsoft.AspNetCore.Authentication.JwtBearer is a middleware that enables a service to receive an OpenID Connect bearer token.

#### Please make sure not to include the firebase-config.json file in a public repository. I left it there for demo purposes after deleting the service. Firebase service account configuration files should be private. 

For the demo, I implemented a register and login page. Upon signing in, the user will simply see a page with weather information (default endpoint in ASP.NET web api templates). The styling is minimal, since this is not the purpose of this demo.

The user can use their Google account to sign in or their email and password. For the latter, they have to also confirm the email before they can access their account. Sending emails is also implemented in Firebase for such purposes. Of course, the sender details as well as the email contents can be fully customized there.