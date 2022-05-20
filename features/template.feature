Feature: Trace Manager

  Scenario: Should run in debug mode
    When <method> method is called with <message> message
    Then it should write <display> message in console"

    Examples: 
      | method  | message   | display   |
      | "debug" | "example" | "example" |
      | "info"  | "example" | "example" |
      | "warn"  | "example" | "example" |
      | "error" | "example" | "example" |
