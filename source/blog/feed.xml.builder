xml.instruct!
xml.feed "xmlns" => "http://www.w3.org/2005/Atom" do
  xml.title "Echo3 Blog"
  xml.subtitle "Echo3 News and Updates"
  xml.id "http://echo3.echo3/echo3 TODO"
  xml.link "href" => "http://echo3.echo3/echo3 TODO"
  xml.link "href" => "http://echo3.echo3/echo3/feed.xml TODO", "rel" => "self"
  xml.updated blog.articles.first.date.to_time.iso8601
  xml.author { xml.name "Echo3" }

  blog.articles[0..10].each do |article|
    xml.entry do
      xml.title article.title
      xml.link "rel" => "alternate", "href" => article.url
      xml.id article.url
      xml.published article.date.to_time.iso8601
      xml.updated article.date.to_time.iso8601
      xml.author { xml.name "Echo3" }
      xml.summary article.summary, "type" => "html"
      xml.content article.body, "type" => "html"
    end
  end
end
