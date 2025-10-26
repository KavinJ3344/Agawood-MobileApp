import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/ui/Button';

export default function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.centerContent}>
          <View style={styles.logoContainer}>
            <View style={styles.logoPlaceholder}>
              <Text style={styles.logoText}>AV</Text>
            </View>
          </View>
          
          <View style={styles.textContainer}>
            <Text style={styles.title}>
              AgarVision
            </Text>
            <Text style={styles.subtitle}>
              Premium Agarwood Solutions
            </Text>
            <Text style={styles.description}>
              Intelligent Disease Detection • Market Forecasting • Resin Grading • Tree Grading
            </Text>
            <Text style={styles.details}>
               AgarVision is an AI-powered decision support system designed to empower 
    agarwood farmers and researchers. It helps identify diseases early, 
    predict optimal market prices, and evaluate resin quality with precision. 
    
            </Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="Get Started"
            onPress={() => console.log('Get Started pressed')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 32,
  },
  logoPlaceholder: {
    width: 120,
    height: 120,
    backgroundColor: '#09a21dff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#4b5563',
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    color: '#6b7280',
    lineHeight: 24,
    paddingHorizontal: 16,
  },
  details: {
    textAlign: 'center',
    color: '#6b7280',
    lineHeight: 24,
    paddingHorizontal: 16,
    marginTop: 16,
  },
  buttonContainer: {
    paddingBottom: 32,
  },
});