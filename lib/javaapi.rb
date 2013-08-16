require "nokogiri"

def index(current_package, current_class)
  # Build a <ul> based navigation menu for the Java API JavaDoc.
  f = File.open("source/documentation/api/java/overview-frame.html.erb")
  @doc = Nokogiri::HTML(f)
  packages = "<ul class=\"nav nav-pills nav-stacked\">\n"
  @doc.xpath("//li/a").each do |a|
    package_path = a.xpath("@href").text().split("/")[0..-2].join("/")
    package = a.xpath("@href").text().split("/")[0..-2].join(".")
    packages += "  <li class=\"package\"><a href=\"/documentation/api/java/" + package_path + "/package-summary.html" + "\">" + package + "</a></li>\n"
    fp = File.open("source/documentation/api/java/" + package_path + "/package-frame.html.erb")
    if package_path.gsub("/", ".") == current_package
      @pdoc = Nokogiri::HTML(fp)
      @pdoc.xpath("//ul").each do |ul|
        packages += "    <li class=\"type\"><a>" + ul.xpath("@title").text() + "</a></li>\n"
        ul.xpath("./li/a").each do |a|
          if a.text() == current_class
            packages += "      <li class=\"class active\"><a href=\"/documentation/api/java/" + package_path + "/" + a.text() + ".html\">" + a.text() + "</a></li>\n"
          else
            packages += "      <li class=\"class\"><a href=\"/documentation/api/java/" + package_path + "/" + a.text() + ".html\">" + a.text() + "</a></li>\n"
          end  
        end
      end
    end
    fp.close
  end
  packages += "</ul>\n"
  f.close
  return packages
end

# ::Middleman::Extensions.register(:javaapi, JavaAPI)

#puts index()
