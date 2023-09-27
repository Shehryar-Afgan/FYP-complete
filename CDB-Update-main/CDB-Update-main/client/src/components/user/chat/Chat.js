import React, { useEffect } from 'react';
import Sidebar from '../Navbar/Sidebar';

export default function Chat() {
  useEffect(() => {
    const kommunicateScript = document.getElementById('kommunicate-script');
    if (!kommunicateScript) {
      (function (d, m) {
        var kommunicateSettings = {
          appId: '283d08d9e37b0467a49a0c3b444e36e26',
          popupWidget: true,
          automaticChatOpenOnNavigation: true,
        };
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.id = 'kommunicate-script';
        s.src = 'https://widget.kommunicate.io/v2/kommunicate.app';
        var h = document.getElementsByTagName('head')[0];
        h.appendChild(s);
        window.kommunicate = m;
        m._globals = kommunicateSettings;
      })(document, window.kommunicate || {});
    }
  }, []);

  return (
    <div>
      <div className='row p-0 m-0'>
        <div className='col-3 m-0 me-5 p-0' style={{ minHeight: '100vh' }}>
          <Sidebar />
        </div>
        <div className='col mt-5'>
          <div className='container'>
            <div className='d-flex flex-column align-items-center'>
              <h1>Career Guidance chatbot</h1>
              <div
                className='row d-flex justify-content-center pt-3 pb-3 w-100 border-bottom border-3 border-primary'
                style={{ maxHeight: '80vh', overflow: 'auto' }}
              >
                <div className='col-8'>
                  <h3 style={{ textAlign: 'justify' }}>
                    A chatbot that makes your career guidance business easy to
                    manage. Ditch the age-old forms and calls and switch to a
                    rather innovative way of helping candidates.
                  </h3>
                </div>
                <div className='col text-center'>
                  <img
                    className='border border-3'
                    src='https://img.freepik.com/premium-vector/chat-bot-icon-virtual-assistant-website-chat-bot-concept-customer-service_501045-1530.jpg?w=360'
                    alt='chatbot-display'
                    style={{
                      maxWidth: 210,
                      maxHeight: 210,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
