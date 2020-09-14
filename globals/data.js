module.exports = [
    {
        testCase: "Should verify that the name error message is shown",
        name: "",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        screenshotFileName: "./screen_evidence/name_error_message.png",
        expected: "Please, fill in the following fields:\nName"
    },
    {
        testCase: "Should verify that the message error is shown",
        name: "John Doe",
        message: "",
        screenshotFileName: "./screen_evidence/message_error_message.png",
        expected: "Please, fill in the following fields:\nMessage"
    },
    {
        testCase: "Should verify that the message and name errors are shown",
        name: "",
        message: "",
        screenshotFileName: "./screen_evidence/message_and_name_error_message.png",
        expected: "Please, fill in the following fields:\nName\nMessage"
    }
];