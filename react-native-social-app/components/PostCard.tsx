// components/PostCard.tsx
import { View, Pressable, StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import type { Post } from '../types';
import { router } from 'expo-router';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Pressable 
      onPress={() => router.push(`/post/${post.id}`)}
      style={({ pressed }) => [
        styles.card,
        { opacity: pressed ? 0.8 : 1 }
      ]}
    >
      <ThemedView style={styles.container}>
        <ThemedText style={styles.title}>{post.title}</ThemedText>
        <ThemedText numberOfLines={2} style={styles.body}>
          {post.body}
        </ThemedText>
      </ThemedView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    overflow: 'hidden',
  },
  container: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  body: {
    fontSize: 14,
    opacity: 0.7,
  },
});

