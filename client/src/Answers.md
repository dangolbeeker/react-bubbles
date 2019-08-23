Explain what a token is used for.

Token Based authentication allows web apps to add more security without ruining the users experience. The token allows the user to access protected pages without having to reenter there login details over and over. 


 What steps can you take in your web apps to keep your data secure?

Protect sensitive data
Set up a proper authentication system
Develop a secure password reset system
 Filter user inputs


 Describe how web servers work.

A page on internet can be viewed, when the browser requests it from the web server and the web server responds with that page. process consists of 4 steps, they are:

Obtaining the IP Address from domain name: Our web browser first obtains the IP address the domain name (for e.g., for this page the domain name is www.geeksforgeeks.org) resolves to. It can obtain the IP address in 2 ways-
By searching in its cache.
By requesting one or more DNS (Domain Name System) Servers.
Note: Any website is assigned an IP address when it is first created on web server.

Browser requests the full URL : After knowing the IP Address, the browser now demands a full URL from the web server.
Web server responds to request: The web server responds to the browser by sending the desired pages, and in case, the pages do not exist or some other error occurs, it will send the appropriate error message.
For example:
You may have seen Error 404, while trying to open a webpage, which is the message sent by the server when the page does not exist.
Another common one is Error 401 when access is denied to us due to incorrect credentials, like username or password, provided by us.

Browser displays the web page: The Browser finally gets the webpages and displays it, or displays the error message.


 Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

 Create = Post Request
 Read = Get Request
 Update = Put Request
 Delete = Delete Request