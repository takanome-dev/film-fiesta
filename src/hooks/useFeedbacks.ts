import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getFeedbacks } from '@/services/feedback';


// TODO: update this 
export default function useFeedbacks() {

  const { data, refetch, isLoading, error } = useQuery({queryKey: [`getFeedbacks`], queryFn: async () => await getFeedbacks()})

  return { feedbacks: data ?? [], refetch, loading: isLoading, error  };
}