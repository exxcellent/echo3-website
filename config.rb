require 'redcarpet' # Markdown parser

Dir['./lib/*'].each { |f| require f }

# Reload the browser automatically whenever files change
activate :livereload
Time.zone = "Berlin"
activate :relative_assets

set :css_dir, 'assets/css'
set :js_dir, 'assets/js'
set :images_dir, 'assets/img'

# Automatically create directories with an index.html for *.html files -> pretty URLs
activate :directory_indexes

page "documentation/api/java/*", :directory_index => false

# Set Markdown parser options
set :markdown_engine, :redcarpet
set :markdown, :layout_engine => :erb, 
               :fenced_code_blocks => true,
               :lax_html_blocks => true,
               :renderer => Highlighter::HighlightedHTML.new
               
activate :highlighter
               

# Custom layouts

page "documentation*", :layout => :documentation
page "documentation/guides*", :layout => :guides
page "documentation/api*", :layout => :api
page "documentation/api/js*", :layout => :jsapi
page "documentation/api/java*", :layout => :javaapi
page "blog/*", :layout => :blog
page "blog/feed.xml", :layout => false

activate :blog do |blog|
  blog.prefix = "blog"
  blog.summary_separator = /SUMMARY-END/ # content before this marker in blog posts can be used as summary
end

helpers do
  def javaapi_index()
    path_prefix = "documentation/api/java/"
    current_package = current_page.path[path_prefix.length..-1].split("/")[0..-2].join(".")
    current_class = current_page.path.split("/")[-1].split(".")[0]
    return index(current_package, current_class)
  end
  
  def active_js_accordion(current_path)
    # Extract JS namespace from URL, e.g. "Class.Echo.Foo.Bar" -> "Echo"
    current_path.split('/')[-1].split('.')[1]
  end

  def partial_for(key, partial_name=nil)
    @partial_names ||= {}
    if partial_name
      @partial_names[key] = partial_name
    else
      @partial_names[key]
    end
  end

  def rendered_partial_for(key)
    partial_name = partial_for(key)
    partial(partial_name) if partial_name
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
