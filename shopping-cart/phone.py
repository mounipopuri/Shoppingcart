import nexmo
responseData = client.send_message(
    {
        "from": "Acme Inc",
        "to": '917702592673',
        "text": "A text message sent using the Nexmo SMS API",
    }
)

if responseData["messages"][0]["status"] == "0":
	print("Message sent successfully.")
else:
    print("Message failed with error: {responseData['messages'][0]['error-text']}")
