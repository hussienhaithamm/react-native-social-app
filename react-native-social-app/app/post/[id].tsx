import { useLocalSearchParams } from 'expo-router';
import { ScrollView, ActivityIndicator, StyleSheet } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { CommentCard } from '@/components/CommentCard';
import type { Comment } from '@/types'; // Import the Comment type from your types file

export default function PostScreen() {
  const { id } = useLocalSearchParams();
  const postId = Number(id);

  // Fetch post details
  const {
    data: post,
    isLoading: isPostLoading,
    error: postError,
  } = useQuery({
    queryKey: ['post', postId],
    queryFn: () => api.getPosts(),
  });

  // Fetch comments
  const {
    data: comments,
    isLoading: isCommentsLoading,
    error: commentsError,
  } = useQuery({
    queryKey: ['comments', postId],
    queryFn: () => api.getPostComments(postId),
  });

  // Loading state
  if (isPostLoading || isCommentsLoading) {
    return (
      <ThemedView style={styles.centered}>
        <ActivityIndicator size="large" />
      </ThemedView>
    );
  }

  // Error state
  if (postError || commentsError) {
    return (
      <ThemedView style={styles.centered}>
        <ThemedText>Failed to load post or comments.</ThemedText>
        {postError && <ThemedText>Post Error: {postError.message}</ThemedText>}
        {commentsError && <ThemedText>Comments Error: {commentsError.message}</ThemedText>}
      </ThemedView>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Post Details */}
      <ThemedView style={styles.postContainer}>
        <ThemedText type="title" style={styles.postTitle}>
          {post?.title}
        </ThemedText>
        <ThemedText style={styles.postBody}>{post?.body}</ThemedText>
      </ThemedView>

      {/* Comments Section */}
      <ThemedView style={styles.commentsContainer}>
        <ThemedText type="subtitle" style={styles.commentsTitle}>
          Comments
        </ThemedText>
        {comments?.map((comment: Comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 16,
  },
  postContainer: {
    marginBottom: 24,
  },
  postTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  postBody: {
    fontSize: 16,
    lineHeight: 24,
  },
  commentsContainer: {
    marginTop: 16,
  },
  commentsTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
});