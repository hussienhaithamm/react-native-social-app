import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import type { Comment } from '../types';
import { generateAvatarUrl } from '../utils/avatar'; // Ensure this path is correct and the module exists

interface CommentCardProps {
  comment: Comment;
}

export const CommentCard: React.FC<CommentCardProps> = ({ comment }) => {
  return (
    <ThemedView style={styles.container}>
      {/* Comment Header with Avatar */}
      <View style={styles.commentHeader}>
        <Image
          source={{ uri: generateAvatarUrl(comment.name) }}
          style={styles.commentAvatar}
        />
        <View>
          <ThemedText style={styles.name}>{comment.name}</ThemedText>
          <ThemedText style={styles.email}>{comment.email}</ThemedText>
        </View>
      </View>

      {/* Comment Body */}
      <ThemedText style={styles.body}>{comment.body}</ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12,
  },
  commentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  commentAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  email: {
    fontSize: 12,
    opacity: 0.7,
  },
  body: {
    fontSize: 14,
    lineHeight: 20,
  },
});