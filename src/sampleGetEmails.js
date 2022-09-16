
/*
    SAMPLE - display first 50 emails in the inbox
*/
const retrieveEmails = () => {
    let PAGE_SIZE = 20;
    let searchText = 'github'

    try {
        // https://developers.google.com/apps-script/reference/gmail/gmail-thread
        let threads = GmailApp.search(searchText, 0, PAGE_SIZE);

        for (const thread of threads) {
            // get messages in this thread
            let messages = thread.getMessages()

            for (const message of messages) {
                Logger.log(message.getSubject());
            }

        }

    } catch (e) { }
}
