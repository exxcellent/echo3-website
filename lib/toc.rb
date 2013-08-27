require 'redcarpet'

module TOC
  class << self
    def registered(app)
      app.helpers Helpers
    end
    alias :included :registered
  end

  module TableOfContents
    extend self

    def anchorify(text)
      text.gsub(/&#?\w+;/, '-').gsub(/\W+/, '-').gsub(/^-|-$/, '').downcase
    end
  end

  module Helpers
    def index_for(data)
      result = ''

      request_path_splits = request.path.split('/')

      current_url = request_path_splits[2]
      sub_url     = request_path_splits[3]
      intro_page  = request_path_splits.length == 4
      sub_url     = nil if intro_page
        
      data.each_entry do |chapter_name, chapter|
        current = (chapter.url == current_url and not sub_url)
        
        url = url_for '/documentation/guides/' + chapter.url
        
        result << %Q{
          <li class="sidebar-subsection #{current ? 'active' : ''}">
            <a href="#{url}">#{chapter_name}</a>
            </li>
        }
        
        if chapter.sections
          chapter.sections.each do |section|
            current = (chapter.url == current_url and section.url == sub_url)
            url = url_for '/documentation/guides/' + chapter.url + '/' + section.url
            
            result << %Q{
              <li class="sidebar-subsubsection #{current ? 'active' : ''}">
                <a href="#{url}">#{section.title}</a>
                </li>
            }
          end
        end
      end
      return result
    end
    
   
  end
end

::Middleman::Extensions.register(:toc, TOC)
