import React from "react"
import Button from "../components/Button"

const ContactForm = () => {
  return (
    <div className="container py-12 lg:py-16">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
        Contact Wes for your next project
      </h2>

      <p>If you'd like to contact me about custom development, a Website project, or translation services, email me at wes@wesjones.net.</p>

      <p>Or reach out to me on one of the following networks:</p>

      <div class="flex flex-wrap p-4">
        <div class="w-full sm:w-1/3">
          <p>
            <Button href="https://www.toptal.com/resume/wesley-jones">Hire me on Toptal</Button>
          </p>
        </div>
        <div class="w-full sm:w-1/3">
          <p>
            <a href="https://ec.linkedin.com/pub/wes-jones/b/9b5/291">
              <img src="https://static.licdn.com/scds/common/u/img/webpromo/btn_viewmy_160x33.png" width="160" height="33" border="0" alt="View Wes Jones's profile on LinkedIn" />
            </a>
          </p>
        </div>
      </div>

      <p>I look forward to hearing from you!</p>

    </div>
  )
}

export default ContactForm
