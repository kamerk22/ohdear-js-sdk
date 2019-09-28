# Sites

## Get your user info with the PHP SDK
This page will get you started getting your user info with the PHP SDK. Make sure you've read the getting started guide first. Once that's done, you should have our package & authentication ready to go.

## Who are you? #
You can get your user info with the convenient me() method. Behind the scenes, it queries the user info API endpoint.

```
$user = $ohDear->me();
The me() method will return an instance of OhDear\PhpSdk\Resources\User.
```
```
$user->name; // returns your name
$user->email; // returns your email
```
You can get the teams you belong to with through the teams property.

```
$teams = $user->teams;
```
The $teams variable is an array of OhDear\PhpSdk\Resources\Team.
```
$team->id // returns the id of the team
$team->name // returns the name of the team
```
A user can belong to multiple teams. The API key you used to authenticate with belongs to a single user.