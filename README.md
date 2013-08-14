Echo3 Website
=============

Echo3 community website.

Development
-----------

The website is developed using the static site generator [Middleman](http://middlemanapp.com/)

Requirements:
* ruby
* rubygems
* ruby-bundle


    sudo apt-get install ruby ruby-dev rubygems
    gem install bundler
      

To get started:

    cd website
    bundle
    bundle exec middleman server

which starts a web server at [http://localhost:4567/](http://localhost:4567/)

To build the static version of the website for deployment run

    bundle exec middleman build


