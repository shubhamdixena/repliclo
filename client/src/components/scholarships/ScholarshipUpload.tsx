import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, FileText, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface UploadState {
  status: 'idle' | 'uploading' | 'success' | 'error';
  progress: number;
  message?: string;
}

export const ScholarshipUpload: React.FC = () => {
  const [uploadState, setUploadState] = useState<UploadState>({
    status: 'idle',
    progress: 0
  });

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    if (file.type !== 'text/csv') {
      setUploadState({
        status: 'error',
        progress: 0,
        message: 'Please upload a CSV file'
      });
      return;
    }

    setUploadState({ status: 'uploading', progress: 0 });

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/scholarships/upload', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();
      setUploadState({
        status: 'success',
        progress: 100,
        message: data.message
      });
    } catch (error) {
      setUploadState({
        status: 'error',
        progress: 0,
        message: 'Failed to upload file'
      });
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/csv': ['.csv']
    },
    multiple: false
  });

  const reset = () => {
    setUploadState({ status: 'idle', progress: 0 });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Scholarships</CardTitle>
      </CardHeader>
      <CardContent>
        <div
          {...getRootProps()}
          className={`
            border-2 border-dashed rounded-lg p-8 text-center cursor-pointer
            transition-colors duration-200 ease-in-out
            ${isDragActive ? 'border-primary bg-primary/5' : 'border-muted-foreground/25'}
            ${uploadState.status === 'error' ? 'border-destructive' : ''}
            ${uploadState.status === 'success' ? 'border-green-500' : ''}
          `}
        >
          <input {...getInputProps()} />
          
          {uploadState.status === 'idle' && (
            <div className="space-y-4">
              <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
              <div>
                <p className="text-lg font-medium">
                  {isDragActive ? 'Drop the CSV file here' : 'Drag & drop a CSV file here'}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  or click to select a file
                </p>
              </div>
            </div>
          )}

          {uploadState.status === 'uploading' && (
            <div className="space-y-4">
              <FileText className="mx-auto h-12 w-12 text-primary animate-pulse" />
              <div>
                <p className="text-lg font-medium">Uploading...</p>
                <Progress value={uploadState.progress} className="mt-2" />
              </div>
            </div>
          )}

          {uploadState.status === 'success' && (
            <div className="space-y-4">
              <Check className="mx-auto h-12 w-12 text-green-500" />
              <div>
                <p className="text-lg font-medium text-green-500">Upload Complete!</p>
                <p className="text-sm text-muted-foreground mt-1">{uploadState.message}</p>
                <Button variant="outline" onClick={reset} className="mt-4">
                  Upload Another File
                </Button>
              </div>
            </div>
          )}

          {uploadState.status === 'error' && (
            <div className="space-y-4">
              <X className="mx-auto h-12 w-12 text-destructive" />
              <div>
                <p className="text-lg font-medium text-destructive">Upload Failed</p>
                <p className="text-sm text-muted-foreground mt-1">{uploadState.message}</p>
                <Button variant="outline" onClick={reset} className="mt-4">
                  Try Again
                </Button>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}; 