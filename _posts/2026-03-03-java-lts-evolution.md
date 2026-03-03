---
layout: post
title: Java 11, 17, 21, 25 - The LTS Evolution
---

As the Java ecosystem continues to evolve with its six-month release cycle, the Long-Term Support (LTS) releases remain the bedrock for enterprise stability. Let's take a look at the major milestones from Java 11, 17, 21, and the newest LTS, Java 25.

## Java 11: Modernizing the Foundation

Released in September 2018, Java 11 brought several developer-centric improvements:

*   **HTTP Client (Standard)**: A new `HttpClient` API replaced the aging `HttpURLConnection`.
    ```java
    var client = HttpClient.newHttpClient();
    var request = HttpRequest.newBuilder()
        .uri(URI.create("https://api.example.com"))
        .build();
    client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
        .thenApply(HttpResponse::body)
        .thenAccept(System.out::println);
    ```
*   **Local-Variable Syntax for Lambda Parameters**: You can now use `var` in lambda expressions.
    ```java
    List<String> list = List.of("a", "b", "c");
    String result = list.stream()
        .map((@Nonnull var s) -> s.toUpperCase())
        .collect(Collectors.joining());
    ```
*   **Single-File Source-Code Programs**: Run Java files directly without explicit compilation.
    ```bash
    java HelloWorld.java
    ```

## Java 17: Refining the Language

Java 17 (September 2021) focused on making the language more expressive and secure:

*   **Sealed Classes**: Restrict which classes may extend or implement them.
    ```java
    public sealed interface Shape permits Circle, Square {}
    public final class Circle implements Shape {}
    public final class Square implements Shape {}
    ```
*   **Records**: A concise way to create data-transfer objects (DTOs).
    ```java
    public record Point(int x, int y) {}
    ```
*   **Pattern Matching for switch (Preview)**: Enhancing the `switch` statement to work with types.
    ```java
    static String formatter(Object obj) {
        return switch (obj) {
            case Integer i -> String.format("int %d", i);
            case Long l    -> String.format("long %d", l);
            case Double d  -> String.format("double %f", d);
            case String s  -> String.format("String %s", s);
            default        -> obj.toString();
        };
    }
    ```

## Java 21: The Next Giant Leap

Java 21 (September 2023) introduced groundbreaking features for scalability and data handling:

*   **Virtual Threads (Project Loom)**: Lightweight threads for high-throughput concurrent applications.
    ```java
    try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
        IntStream.range(0, 10_000).forEach(i -> {
            executor.submit(() -> {
                Thread.sleep(Duration.ofSeconds(1));
                return i;
            });
        });
    }
    ```
*   **Sequenced Collections**: New interfaces for collections with a defined encounter order.
    ```java
    LinkedHashSet<String> set = new LinkedHashSet<>();
    set.addFirst("first");
    set.addLast("last");
    String first = set.getFirst();
    ```
*   **Record Patterns**: Deconstruct record values using pattern matching.
    ```java
    if (obj instanceof Point(int x, int y)) {
        System.out.println("Coordinates: " + x + ", " + y);
    }
    ```

## Java 25: The First LTS of the Future

Released in September 2025, Java 25 continues the momentum of language modernization:

*   **Flexible Constructor Bodies**: You can now execute code *before* calling `super()` or `this()` in a constructor, making it easier to validate arguments or initialize fields.
    ```java
    public class Customer extends Person {
        private final UUID id;
        public Customer(String name) {
            if (name == null || name.isBlank()) throw new IllegalArgumentException();
            this.id = UUID.randomUUID();
            super(name); // Now allowed after initialization/validation!
        }
    }
    ```
*   **Module Import Declarations**: Simplify your imports by importing an entire module's exported types with a single declaration.
    ```java
    import module java.base;
    import module com.company.utils;

    public class App {
        public static void main(String[] args) {
            List<String> list = List.of("Java 25"); // From java.base
            Logger.info("Starting..."); // From com.company.utils
        }
    }
    ```
*   **Key Derivation Function API**: A standard API for password-based key derivation (PBKDF2, scrypt).
    ```java
    var kdf = KDF.getInstance("PBKDF2WithHmacSHA256");
    var key = kdf.deriveKey(...);
    ```
*   **Primitive Types in Patterns (Preview)**: Extend pattern matching to work seamlessly with all primitive types.

The transition from Java 11 to 25 shows a clear path towards simpler syntax, better performance, and superior concurrency models. Each LTS version brings significant refinements that make Java a more powerful and enjoyable language to work with!
