require 'redcarpet' # Markdown parser

# Reload the browser automatically whenever files change
activate :livereload

set :css_dir, 'assets/css'
set :js_dir, 'assets/js'
set :images_dir, 'assets/img'

# Automatically create directories with an index.html for *.html files -> pretty URLs
activate :directory_indexes

page "/api/java/*", :directory_index => false


# Set Markdown parser options
set :markdown_engine, :redcarpet
set :markdown, :layout_engine => :erb, 
               :tables => true, 
               :autolink => true,
               :smartypants => true

# Custom layouts
page "guides*", :layout => :guides
page "api/js*", :layout => :jsapi
page "api/java*", :layout => :javaapi

helpers do
  def active_js_accordion(current_path)
    # Extract JS namespace from URL, e.g. "Class.Echo.Foo.Bar" -> "Echo"
    current_path.split('/')[-1].split('.')[1]
  end
end


# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript

  # Enable cache buster
  # activate :asset_hash

  # Use relative URLs
  # activate :relative_assets

  # Or use a different image path
  # set :http_path, "/Content/images/"
end
