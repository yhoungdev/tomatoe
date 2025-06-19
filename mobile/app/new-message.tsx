import { View, TextInput, StyleSheet, Text, KeyboardAvoidingView, Platform } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import PrimaryButton from "@/components/ui/button";
import COLORS from "@/constants/Colors";
import Typography from "@/components/typography";

export default function NewMessage() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const maxLength = 50;
  const messageLength = message.length;
  const isOverLimit = messageLength > maxLength;
  const isSendDisabled = !message.trim() || isOverLimit;

  const handleSave = () => {
    if (!message.trim()) {
      setError("Message cannot be empty.");
      return;
    }
    setError("");
    router.back();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.inner}>
        <Typography variant="h1">New Message</Typography>
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Type your message..."
            placeholderTextColor={COLORS.MUTED}
            value={message}
            onChangeText={text => {
              setMessage(text);
              if (error && text.trim()) setError("");
            }}
            multiline
            maxLength={maxLength + 20} 
            autoFocus
          />
          <View style={styles.counterRow}>
            <Text
              style={[
                styles.counter,
                isOverLimit && { color: COLORS.ERROR },
              ]}
            >
              {messageLength}/{maxLength}
            </Text>
          </View>
        </View>
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <PrimaryButton onPress={handleSave} disabled={isSendDisabled}>
          Send Message 🚀
        </PrimaryButton>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
  inner: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#222",
    marginBottom: 24,
    letterSpacing: 0.2,
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    marginBottom: 18,
    marginTop: 18,
    
  },
  input: {
   
    maxHeight: 180,
    fontSize: 14,
    color: "#222",
    backgroundColor: "#F5F6FA",
    borderRadius: 3,
    padding: 18,
    textAlignVertical: "top",
    height: 200,
  },
  error: {
    color: "#E74C3C",
    fontSize: 15,
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  counterRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingBottom: 8,
  },
  counter: {
    fontSize: 14,
    color: COLORS.MUTED,
    fontWeight: '500',
  },
}); 