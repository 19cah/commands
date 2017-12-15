 # How to use [git.io](https://git.io) to shorten GitHub URLs and create vanity URLs
 
 Visit my blog at [19cah.com/blog/](https://19cah.com/blog/2017/11/10/how-to-shorten-urls-on-github.html) to see an article where I explain how to do it!
 
 Suppose you want to shorten the URL to a particular location on GitHub. Or perhaps you want to create a vanity URL that goes directly to your GitHub profile, e.g. https://git.io/19cah. You can use Git.io: GitHub URL Shortener.
 
 To shorten a URL, open your command prompt (via Git Shell) and type in
 ```
$ curl -i https://git.io -F "url=https://github.com/19cah" -F "code=19cah"
```
Where 
```
-F "code=vanity"
```
You will recive in the response your shorten URL!
```
Location: https://git.io/v5hxi
```
To create a vanity URL to your profile you need to add `#` at the end of your profile to create a new and unique URL
```
$ curl -i https://git.io -F "url=https://github.com/19cah#" -F "code=19cah"
```
Now you'll recive in the respose
```
Location https://git.io/19cah
```
